(function XmlTest(){

    var fileLocations = {
        // "test1": "data/singleItem.xml",
        "test1": "singleItem.xml",
        "test2": "data/twoItems.xml",
        "test3": "data/fourItems.xml",
        "test4": "https://xkcd.com/rss.xml"
    };

    var expectedResults = {
        "test1": {
            "rss": {
                "channel": {
                    "title": "xkcd.com",
                    "link": "https://xkcd.com/",
                    "description": "xkcd.com: A webcomic of romance and math humor.",
                    "language": "en",
                    "item": {
                        "title": "Opening Crawl",
                        "link": "https://xkcd.com/1843/",
                        "description": "<img src=\"https://imgs.xkcd.com/comics/opening_crawl.png\" title=\"Using a classic Timothy Zahn EU/Legends novel is bad enough, but at least the style and setting aren't too far off. If you really want to mess with people, try using Splinter of the Mind's Eye.\" alt=\"Using a classic Timothy Zahn EU/Legends novel is bad enough, but at least the style and setting aren't too far off. If you really want to mess with people, try using Splinter of the Mind's Eye.\"/>",
                        "pubDate": "Mon, 29 May 2017 04:00:00 -0000",
                        "guid": "https://xkcd.com/1843/"
                    }
                }
            }
        },
        "test2": {
            "rss": {
                "channel": {
                    "title": "xkcd.com",
                    "link": "https://xkcd.com/",
                    "description": "xkcd.com: A webcomic of romance and math humor.",
                    "language": "en",
                    "item": [
                        {
                            "title": "Opening Crawl",
                            "link": "https://xkcd.com/1843/",
                            "description": "<img src=\"https://imgs.xkcd.com/comics/opening_crawl.png\" title=\"Using a classic Timothy Zahn EU/Legends novel is bad enough, but at least the style and setting aren't too far off. If you really want to mess with people, try using Splinter of the Mind's Eye.\" alt=\"Using a classic Timothy Zahn EU/Legends novel is bad enough, but at least the style and setting aren't too far off. If you really want to mess with people, try using Splinter of the Mind's Eye.\"/>",
                            "pubDate": "Mon, 29 May 2017 04:00:00 -0000",
                            "guid": "https://xkcd.com/1843/"
                        },
                        {
                            "title": "Anti-Drone Eagles",
                            "link": "https://xkcd.com/1842/",
                            "description": "<img src=\"https://imgs.xkcd.com/comics/anti_drone_eagles.png\" title=\"It's cool, it's totally ethical--they're all programmed to hunt whichever bird of prey is most numerous at the moment, so they leave the endangered ones alone until near the end.\" alt=\"It's cool, it's totally ethical--they're all programmed to hunt whichever bird of prey is most numerous at the moment, so they leave the endangered ones alone until near the end.\"/>",
                            "pubDate": "Fri, 26 May 2017 04:00:00 -0000",
                            "guid": "https://xkcd.com/1842/"
                        }
                    ]
                }
            }
        },
        "test3": {
            "rss": {
                "channel": {
                    "title": "xkcd.com",
                    "link": "https://xkcd.com/",
                    "description": "xkcd.com: A webcomic of romance and math humor.",
                    "language": "en",
                    "item": [
                        {
                            "title": "Opening Crawl",
                            "link": "https://xkcd.com/1843/",
                            "description": "<img src=\"https://imgs.xkcd.com/comics/opening_crawl.png\" title=\"Using a classic Timothy Zahn EU/Legends novel is bad enough, but at least the style and setting aren't too far off. If you really want to mess with people, try using Splinter of the Mind's Eye.\" alt=\"Using a classic Timothy Zahn EU/Legends novel is bad enough, but at least the style and setting aren't too far off. If you really want to mess with people, try using Splinter of the Mind's Eye.\"/>",
                            "pubDate": "Mon, 29 May 2017 04:00:00 -0000",
                            "guid": "https://xkcd.com/1843/"
                        },
                        {
                            "title": "Anti-Drone Eagles",
                            "link": "https://xkcd.com/1842/",
                            "description": "<img src=\"https://imgs.xkcd.com/comics/anti_drone_eagles.png\" title=\"It's cool, it's totally ethical--they're all programmed to hunt whichever bird of prey is most numerous at the moment, so they leave the endangered ones alone until near the end.\" alt=\"It's cool, it's totally ethical--they're all programmed to hunt whichever bird of prey is most numerous at the moment, so they leave the endangered ones alone until near the end.\"/>",
                            "pubDate": "Fri, 26 May 2017 04:00:00 -0000",
                            "guid": "https://xkcd.com/1842/"
                        },
                        {
                            "title": "Who?",
                            "link": "https://xkcd.com/1841/",
                            "description": "<img src=\"https://imgs.xkcd.com/comics/who.png\" title=\"Gonna feel even dumber when I realize that all this time he's been talking into a bluetooth thingy and we're not actually friends.\" alt=\"Gonna feel even dumber when I realize that all this time he's been talking into a bluetooth thingy and we're not actually friends.\"/>",
                            "pubDate": "Wed, 24 May 2017 04:00:00 -0000",
                            "guid": "https://xkcd.com/1841/"
                        },
                        {
                            "title": "Genetic Testing Results",
                            "link": "https://xkcd.com/1840/",
                            "description": "<img src=\"https://imgs.xkcd.com/comics/genetic_testing_results.png\" title=\"That's very exciting! The bad news is that it's a risk factor for a lot of things.\" alt=\"That's very exciting! The bad news is that it's a risk factor for a lot of things.\"/>",
                            "pubDate": "Mon, 22 May 2017 04:00:00 -0000",
                            "guid": "https://xkcd.com/1840/"
                        }
                    ]
                }
            }
        },
        "test4": {
            "rss": {
                "channel": {
                    "title": "xkcd.com",
                    "link": "https://xkcd.com/",
                    "description": "xkcd.com: A webcomic of romance and math humor.",
                    "language": "en",
                    "item": [
                        {
                            "title": "Opening Crawl",
                            "link": "https://xkcd.com/1843/",
                            "description": "<img src=\"https://imgs.xkcd.com/comics/opening_crawl.png\" title=\"Using a classic Timothy Zahn EU/Legends novel is bad enough, but at least the style and setting aren't too far off. If you really want to mess with people, try using Splinter of the Mind's Eye.\" alt=\"Using a classic Timothy Zahn EU/Legends novel is bad enough, but at least the style and setting aren't too far off. If you really want to mess with people, try using Splinter of the Mind's Eye.\" />",
                            "pubDate": "Mon, 29 May 2017 04:00:00 -0000",
                            "guid": "https://xkcd.com/1843/"
                        },
                        {
                            "title": "Anti-Drone Eagles",
                            "link": "https://xkcd.com/1842/",
                            "description": "<img src=\"https://imgs.xkcd.com/comics/anti_drone_eagles.png\" title=\"It's cool, it's totally ethical--they're all programmed to hunt whichever bird of prey is most numerous at the moment, so they leave the endangered ones alone until near the end.\" alt=\"It's cool, it's totally ethical--they're all programmed to hunt whichever bird of prey is most numerous at the moment, so they leave the endangered ones alone until near the end.\" />",
                            "pubDate": "Fri, 26 May 2017 04:00:00 -0000",
                            "guid": "https://xkcd.com/1842/"
                        },
                        {
                            "title": "Who?",
                            "link": "https://xkcd.com/1841/",
                            "description": "<img src=\"https://imgs.xkcd.com/comics/who.png\" title=\"Gonna feel even dumber when I realize that all this time he's been talking into a bluetooth thingy and we're not actually friends.\" alt=\"Gonna feel even dumber when I realize that all this time he's been talking into a bluetooth thingy and we're not actually friends.\" />",
                            "pubDate": "Wed, 24 May 2017 04:00:00 -0000",
                            "guid": "https://xkcd.com/1841/"
                        },
                        {
                            "title": "Genetic Testing Results",
                            "link": "https://xkcd.com/1840/",
                            "description": "<img src=\"https://imgs.xkcd.com/comics/genetic_testing_results.png\" title=\"That's very exciting! The bad news is that it's a risk factor for a lot of things.\" alt=\"That's very exciting! The bad news is that it's a risk factor for a lot of things.\" />",
                            "pubDate": "Mon, 22 May 2017 04:00:00 -0000",
                            "guid": "https://xkcd.com/1840/"
                        }
                    ]
                }
            }
        }
    };

    var parser = new RssXmlParser();

    // parser.parseFromFile(fileLocations.test1, function(result){
    //     if(JSON.stringify(expectedResults.test1) !== JSON.stringify(result))
    //         console.log("Single item test failed");
    //     else
    //         console.log("Single item test  success");
    // });

    // parser.parseFromFile(fileLocations.test2, function(result){
    //     if(JSON.stringify(expectedResults.test2) !== JSON.stringify(result))
    //         console.log("Two items test failed");
    //     else
    //         console.log("Two items test  success");
    // });
    //
    // parser.parseFromFile(fileLocations.test3, function(result){
    //     if(JSON.stringify(expectedResults.test3) !== JSON.stringify(result))
    //         console.log("Four items test failed");
    //     else
    //         console.log("Four items test  success");
    // });
    //
    parser.parseFromFile(fileLocations.test4, function(result){
        if(JSON.stringify(expectedResults.test4) !== JSON.stringify(result))
            console.log("Four items test failed");
        else
            console.log("Four items test  success");
    });
})();