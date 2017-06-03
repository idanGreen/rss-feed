(function(){

    var RssXmlParser = function RssXmlParser(){};

    // types of tags we don't want to traverse
    var EXCLUDED_TAG_NAMES = ["div", "span", "img"];

    /**
     * Read the xml file and parse it to json
     * @param filepath the path to the rss xml file
     * @param callback called when the parsing is complete
     */
    RssXmlParser.prototype.parseFromFile = function parseFromFile(filepath, callback){

        var onSuccess = function onSuccess(result){
            callback(this.traverseNode(result));
        }.bind(this);

        if(fetch){
            createFetch(filepath, onSuccess);
        }
        else {
            createXHR(filepath, onSuccess);
        }
    };

    RssXmlParser.prototype.traverseNode = function traverseNode(node){
        var result = {};
        traverseNodeHelper(node, result);
        return result;
    };


    /*** Helper methods ***/

    var traverseNodeHelper = function traverseNode(node, buffer){
        var numOfChildren = node.childElementCount;
        var nodeName = node.tagName;

        if(numOfChildren > 0){
            //node has child nodes
            var nodeChildren = Array.from(node.children);

            // special case: don't traverse html tags, we want to display them as html later on
            //TODO: handle case where there is more than 1 html child node
            if(isHtmlTag(nodeChildren[0].tagName)){
                buffer[nodeName] = nodeChildren[0].outerHTML;
            }
            else {
                // traverse each child
                var newBuffer = {};
                nodeChildren.forEach(function(childNode, i){
                    traverseNodeHelper(childNode, newBuffer);
                });
                addNewBuffer(buffer, newBuffer, nodeName);
            }
        }
        // stop case: set node text content as value
        else{
            buffer[nodeName] = node.textContent;
        }
    };

    var addNewBuffer = function addNewBuffer(buffer, newBuffer, nodeName){
        // if there are more than one node with a specific names, transfer into an array
        if(buffer.hasOwnProperty(nodeName)) {
            if(!(buffer[nodeName] instanceof Array)) {
                // to avoid overriding previous added array, save the old object and add the the new array
                var prevObj = buffer[nodeName];
                buffer[nodeName] = [];
                buffer[nodeName].push(prevObj);
            }
            buffer[nodeName].push(newBuffer);

        }
        // otherwise, just add as an object
        else
            buffer[nodeName] = newBuffer;
    };

    /*
     * get file using Fetch API
     */
    var createFetch = function createFetch(filepath, callback){
        var myHeaders = new Headers();
        var init = {
            method: 'GET',
            headers: myHeaders,
            mode: 'cors',
            cache: 'default'
        };
        fetch(filepath, init).then(function(response) {
            if(response.ok) {
                return response.text();
            }
            throw new Error('Error while getting XML.');
        }).then(function(text) {
            var oParser = new DOMParser();
            var oDOM = oParser.parseFromString(text, "text/xml");
            callback(oDOM.documentElement);
        }).catch(function(error) {
            console.log('Error while getting XML: ' + error.message);
        });
    };

    /*
     * get file using XHR
     */
    var createXHR = function createXHR(filepath, callback){
        // create an ajax request
        var xhr = new XMLHttpRequest();

        // on success: traverse the XML tree and turn into json
        xhr.onload = function() {
            var rssRoot = xhr.responseXML.documentElement;
            callback(rssRoot);
        }.bind(this);

        // on error
        xhr.onerror = function() {
            console.log("Error while getting XML.");
            return null;
        };

        // send the request, make sure the response is a document
        xhr.open("GET", filepath);
        xhr.responseType = "document";
        xhr.send();
    };

    var isHtmlTag = function isHtmlTag(tagName){
        return EXCLUDED_TAG_NAMES.indexOf(tagName) >= 0;
    };

    window.RssXmlParser = RssXmlParser;
})();
