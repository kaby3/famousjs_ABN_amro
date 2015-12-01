
define(function(require, exports, module) {
    var Engine     = require("famous/core/Engine");
    var Surface    = require("famous/core/Surface");
    var Flipper    = require("famous/views/Flipper");
    var Scene      = require("famous/core/Scene");
    var Deck       = require('famous/views/Deck');    
    var Modifier = require("famous/core/Modifier");
    var Transform  = require("famous/core/Transform");
    var Transitionable = require('famous/transitions/Transitionable');
    var MouseSync  = require("famous/inputs/MouseSync");
    var TransitionableTransform = require("famous/transitions/TransitionableTransform");
    var ScrollSync = require("famous/inputs/ScrollSync");
    var ImageSurface = require("famous/surfaces/ImageSurface");


    var SpringTransition = require('famous/transitions/SpringTransition');
    Transitionable.registerMethod('spring', SpringTransition);

    
    var mainContext = Engine.createContext();

    //mainContext.setPerspective(100);

    

    ////////////////////////////////////////////////////////////

    // var start = 0;
    // var update = 0;
    // var end = 0;
    // var delta = [0,0];
    // var position = [0,0];
    // var mult = 0;
    // var zoomer = 0;

    // var scrollSync = new ScrollSync();

    // Engine.pipe(scrollSync);

    // var contentTemplate = function() {
    //     return "<div>zoomer is : " + zoomer + "</div>"; //+
         //"<div>zoomer is : " + zoomer + "</div>"; //+
        // "<div>Update Count: " + update + "</div>" +
        // "<div>Delta: " + delta + "</div>" +
        // "<div>Position: " + position + "</div>";
    //};

    //  var surfaceFour = new Surface({
    //     size: [110, 100],
    //     content: contentTemplate(),
    //     //content: '/circle_01.jpg',
    //     classes: ["grey-bg"],
    //     properties: {
    //         lineHeight: "100px",
    //         textAlign: "center"
    //     }
    // }); 


   


//     scrollSync.on("start", function() {

//         start++;
//         surfaceFour.setContent(contentTemplate());
//     });

//     scrollSync.on("update", function(data) {
//         update++;
//         position = data.position;
//         delta = data.delta;

//         if(delta[1] < 0.0){
//             mult = -1;
//             zoomer = zoomer -1; 
//         }
//         else if (delta[1] > 1.0){
//             mult = 1;
//             zoomer = zoomer + 1; 
//         }

        
//         //transitionableTransform2.setScale([z,z,0], {duration: 800});
//         surfaceFour.setContent(contentTemplate());
//     });

//     scrollSync.on("end", function() {
//         end++;
//         surfaceFour.setContent(contentTemplate());
//     });

//     var z = 0.5;
//     var positionModifier = new Modifier({
//         size: [200, 200],
//         origin: [0.5, 0.5], 
//         align: [0.5, 0.5], 
//         transform : function(){
//             console.log("zoomer is :" + zoomer * z);
//             return Transform.translate(zoomer * z, zoomer * z, 0);
//     }
// });


//////////////////////////////////////////////////////////////////////////////


    var rollen_array = ["ICT-rol.png", "Managementrol.png"];
    var tools_array = ["Besturingssystemen.png", "Browsers.png","Office-applicaties.png", "Databases.png", "CRM-systemen.png", "CMS sen.png","Sameworkingsplatforms.png"];
    var archi_array = ["Service-componeneten.png", "Protocolien.png"];
    var methodes_array = ["Projectmanagement.png", "Testmethodes.png", "Software-onwikklemethods.png", "Beheermethods.png"];
    var modellen_array = ["IFW.png"];
    var principes_array = ["Service-orientatie.png", "Architecturrprincipes.png"];

    var rollen_springSurfaces = [];
    var tools_springSurfaces = [];
    var archi_springSurfaces = [];
    var methodes_springSurfaces = [];
    var modellen_springSurfaces = [];
    var principes_springSurfaces = [];

    var flipper = new Flipper();
    var transitionableTransform = new TransitionableTransform();
    var transitionableTransform2 = new TransitionableTransform();
    var transitionableTransform3 = new TransitionableTransform();
    var transitionableTransform4 = new TransitionableTransform();
    var transitionableTransform5 = new TransitionableTransform();
    var transitionableTransform6 = new TransitionableTransform();
    var transitionableTransform7 = new TransitionableTransform();
    

    var myScene = new Scene({
        id: "root",
        opacity: 1,
        target: [
            {
                transform: Transform.translate(0, 0),
                origin: [0.5, 0.5],
                align: [0.5, 0.5],
                target: {id: "main"}
            },
            {
                origin: [0.5, 0.5],
                align: [0.5, 0.5],
                transform: [
                    {translate: [40, 260, -100]},
                    {rotateZ: 0.0},
                    {scale: [0.7, 0.7, 0.7]}
                ],
                target: {id: "group2_rollen"}
            },
            {
                origin: [0.5, 0.5],
                align: [0.5, 0.5],
                transform: [
                    {translate: [100, 355]},
                    {rotateZ: 0.0},
                    {scale: [0.7, 0.7, 0.7]}
                ],
                target: {id: "group3_rollen"}
            },
            {
                origin: [0.5, 0.5],
                align: [0.5, 0.5],
                transform: [
                    {translate: [-30, 90]},
                    {rotateZ: 0.0},
                    {scale: [0.7, 0.7, 0.7]}
                ],
                target: {id: "group2_tools"}
            },
            {
                origin: [0.5, 0.5],
                align: [0.5, 0.5],
                transform: [
                    {translate: [-100, 90]},
                    {rotateZ: 0.0},
                    {scale: [0.7, 0.7, 0.7]}
                ],
                target: {id: "group3_tools"}
            },
            {
                origin: [0.5, 0.5],
                align: [0.5, 0.5],
                transform: [
                    {translate: [40, -70]},
                    {rotateZ: 0.0},
                    {scale: [0.7, 0.7, 0.7]}
                ],
                target: {id: "group2_principles"}
            },
            {
                origin: [0.5, 0.5],
                align: [0.5, 0.5],
                transform: [
                    {translate: [90, -150]},
                    {rotateZ: 0.0},
                    {scale: [0.7, 0.7, 0.7]}
                ],
                target: {id: "group3_principes"}
            },
            {
                origin: [0.5, 0.5],
                align: [0.5, 0.5],
                transform: [
                    {translate: [370, -70]},
                    {rotateZ: 0.0},
                    {scale: [0.7, 0.7, 0.7]}
                ],
                target: {id: "group2_architectuur"}
            },
            {
                origin: [0.5, 0.5],
                align: [0.5, 0.5],
                transform: [
                    {translate: [440, -150]},
                    {rotateZ: 0.0},
                    {scale: [0.7, 0.7, 0.7]}
                ],
                target: {id: "group3_architectuur"}
            },
            {
                origin: [0.5, 0.5],
                align: [0.5, 0.5],
                transform: [
                    {translate: [440, 90]},
                    {rotateZ: 0.0},
                    {scale: [0.7, 0.7, 0.7]}
                ],
                target: {id: "group2_methodes"}
            },
            {
                origin: [0.5, 0.5],
                align: [0.5, 0.5],
                transform: [
                    {translate: [650, 90]},
                    {rotateZ: 0.0},
                    {scale: [0.7, 0.7, 0.7]}
                ],
                target: {id: "group3_methodes"}
            },
            {
                origin: [0.5, 0.5],
                align: [0.5, 0.5],
                transform: [
                    {translate: [370, 260]},
                    {rotateZ: 0.0},
                    {scale: [0.7, 0.7, 0.7]}
                ],
                target: {id: "group2_modellen"}
            },
            {
                origin: [0.5, 0.5],
                align: [0.5, 0.5],
                transform: [
                    {translate: [440, 355]},
                    {rotateZ: 0.0},
                    {scale: [0.7, 0.7, 0.7]}
                ],
                target: {id: "group3_modellen"}
            },
            {
                // origin: [0.5, 0.5],
                // align: [0.5, 0.5],
                //transform: [
                     //{translate: [-380, -130]},
                //     //{rotateZ: 0.0},
                     //{scale: [0.7, 0.7, 0.7]}
                //],
                target: {id: "abn_logo"}
            }
        ]
    });
//-380, -130

/////// ABN log ////////////////////

    var logo = new ImageSurface({
        size: [600, 450],
        content: 'abn_logo.png',
        classes: ['double-sided']
    });

    var initialTime = Date.now();
    var centerSpinModifier = new Modifier({
        //transform: Transform.translate(2340, 0, 100000000),
        origin: [0.5, 0.5],
        align: [0.07, 0.2],

        transform : function () {
            //console.log("date now is :" + (Date.now() - initialTime));
            return Transform.rotateY(.002 * (Date.now() - initialTime));
        }


    });

    //myScene.id["abn_logo"].add(centerSpinModifier).add(logo);
    

    /////////////// END OF ABN LOGO /////////////////////////////

    var surfaceOne = new ImageSurface({
        size: [300, 200],        
        content: 'coe_green.png',
        classes: ['double-sided']
        // properties: {
        //     lineHeight: "200px",
        //     textAlign: "center"
        // }
    });

    var surfaceOne_rear = new ImageSurface({
        size: [300, 200],        
        content: 'coe_purple.png',
        classes: ['double-sided']
    });

    flipper.setFront(surfaceOne);
    flipper.setBack(surfaceOne_rear);

    var modifier = new Modifier({
        align: [.5, .5],
        origin: [.5, .5],
        transform: transitionableTransform
    });

    var modifier2 = new Modifier({
        align: [.5, .5],
        origin: [.5, .5],
        transform: transitionableTransform2
    });

    var modifier3 = new Modifier({
        align: [.5, .5],
        origin: [.5, .5],
        transform: transitionableTransform3
    });

    var modifier4 = new Modifier({
        align: [.5, .5],
        origin: [.5, .5],
        transform: transitionableTransform4
    });

    var modifier5 = new Modifier({
        align: [.5, .5],
        origin: [.5, .5],
        transform: transitionableTransform5
    });

    var modifier6 = new Modifier({
        align: [.5, .5],
        origin: [.5, .5],
        transform: transitionableTransform6
    });

     var modifier6 = new Modifier({
        align: [.5, .5],
        origin: [.5, .5],
        transform: transitionableTransform6
    });
   
// Rollen Section
    var surfaceTwo = new ImageSurface({
        size: [110, 110],
        content: 'circle_rollen.png',
        classes: ['double-sided']
        // properties: {
        //     lineHeight: "100px",
        //     textAlign: "center"
        // }
    });    

    var deck_rollen = new Deck({
        itemSpacing: 20,
        transition: {
            method: 'spring',
            period: 1000,
            dampingRatio: 0.3
        },
        direction: 0,
        stackRotation: 0.05
    });

    deck_rollen.sequenceFrom(rollen_springSurfaces);

    for(var i = 0; i < rollen_array.length; i++) {
        var temp_rollen = new ImageSurface({
            size: [200, 50],
            classes: ['test'],
            // properties: {
            //     backgroundColor: 'hsla(' + ((i*5 + i)*15 % 360) + ', 60%, 50%, 0.8)'
            // },
            content: rollen_array[i]
        });

        temp_rollen.on('click', function() {
           //deck_rollen.toggle();
        });
        rollen_springSurfaces.push(temp_rollen);
    }

    var rollenSpringModifier = new Modifier({
        origin: [0.5, 0.5],
        align: [0.5, 0.5]
    });



// End of rollen section


 // var surfaceFour = new ImageSurface({
 //    size: [200, 200],
 //    content: 'circle_03.png',
 //    classes: ['double-sided']
 //    });

// Tools Section

    var surfaceThree = new ImageSurface({
        size: [110, 110],
        content: 'circle_tools.png',
        classes: ['double-sided'],
        properties: {
            lineHeight: "100px",
            textAlign: "center"
        }
    });      

    var deck_tools = new Deck({
        itemSpacing: 10,
        transition: {
            method: 'spring',
            period: 1000,
            dampingRatio: 0.3
        },
        direction: 1,
        stackRotation: 0.05
    });

    deck_tools.sequenceFrom(tools_springSurfaces);

    for(var i = 0; i < tools_array.length; i++) {
        var temp_tools = new ImageSurface({
            size: [200, 50],
            classes: ['test'],
            // properties: {
            //     backgroundColor: 'hsla(' + ((i*5 + i)*15 % 360) + ', 60%, 50%, 0.8)'
            // },
            content: tools_array[i]
        });

        temp_tools.on('click', function() {
           deck_tools.toggle();
        });
        tools_springSurfaces.push(temp_tools);
    }

    var toolsSpringModifier = new Modifier({
        origin: [0.5, 0.5],
        align: [0.5, 0.5]
    });

// end of tools section


// Architecturr section 

 var archi_surface = new ImageSurface({
        size: [110, 110],
        content: 'circle_archi.png',
        classes: ['double-sided']
        // properties: {
        //     lineHeight: "100px",
        //     textAlign: "center"
        // }
    });      

    var deck_archi = new Deck({
        itemSpacing: 20,
        transition: {
            method: 'spring',
            period: 1000,
            dampingRatio: 0.3
        },
        direction: 0,
        stackRotation: 0.05
    });

    deck_archi.sequenceFrom(archi_springSurfaces);

    for(var i = 0; i < archi_array.length; i++) {
        var temp_archi = new ImageSurface({
            size: [200, 50],
            classes: ['test'],
            // properties: {
            //     backgroundColor: 'hsla(' + ((i*5 + i)*15 % 360) + ', 60%, 50%, 0.8)'
            // },
            content: archi_array[i]
        });

        temp_archi.on('click', function() {
           deck_archi.toggle();
        });
        archi_springSurfaces.push(temp_archi);
    }

    var archiSpringModifier = new Modifier({
        origin: [0.5, 0.5],
        align: [0.5, 0.5]
    });



    // End of Architectuur section

    // beginning of methodes section

    var methodes_surface = new ImageSurface({
        size: [110, 110],
        content: 'circle_methods.png',
        classes: ['double-sided']
        // properties: {
        //     lineHeight: "100px",
        //     textAlign: "center"
        // }
    });      

    var deck_methodes = new Deck({
        itemSpacing: 20,
        transition: {
            method: 'spring',
            period: 1000,
            dampingRatio: 0.3
        },
        direction: 1,
        stackRotation: 0.05
    });

    deck_methodes.sequenceFrom(methodes_springSurfaces);

    for(var i = 0; i < methodes_array.length; i++) {
        var temp_methodes = new ImageSurface({
            size: [200, 50],
            classes: ['test'],
            // properties: {
            //     backgroundColor: 'hsla(' + ((i*5 + i)*15 % 360) + ', 60%, 50%, 0.8)'
            // },
            content: methodes_array[i]
        });

        temp_methodes.on('click', function() {
           deck_methodes.toggle();
        });
        methodes_springSurfaces.push(temp_methodes);
    }

    var methodesSpringModifier = new Modifier({
        origin: [0.5, 0.5],
        align: [0.5, 0.5]
    });


    // end of methodes


    // beginnig of modellon section 

    var modellen_surface = new ImageSurface({
        size: [110, 110],
        content: 'circle_modellen.png',
        classes: ['double-sided']
        // properties: {
        //     lineHeight: "100px",
        //     textAlign: "center"
        // }
    });      

    var deck_modellen = new Deck({
        itemSpacing: 20,
        transition: {
            method: 'spring',
            period: 1000,
            dampingRatio: 0.3
        },
        direction: 1,
        stackRotation: 0.05
    });

    deck_modellen.sequenceFrom(modellen_springSurfaces);

    for(var i = 0; i < modellen_array.length; i++) {
        var temp_modellen = new ImageSurface({
            size: [200, 50],
            classes: ['test'],
            // properties: {
            //     backgroundColor: 'hsla(' + ((i*5 + i)*15 % 360) + ', 60%, 50%, 0.8)'
            // },
            content: modellen_array[i]
        });

        temp_modellen.on('click', function() {
           deck_modellen.toggle();
        });
        modellen_springSurfaces.push(temp_modellen);
    }

    var modellenSpringModifier = new Modifier({
        origin: [0.5, 0.5],
        align: [0.5, 0.5]
    });


    // end of modellon section


    // beggining of the Princi 

     var surfaceFour = new ImageSurface({
        size: [110, 110],
        content: 'circle_principes.png',
        classes: ['double-sided']
    });

    var deck_principes = new Deck({
        itemSpacing: 20,
        transition: {
            method: 'spring',
            period: 1000,
            dampingRatio: 0.3
        },
        direction: 0,
        stackRotation: 0.05
    });

    deck_principes.sequenceFrom(principes_springSurfaces);

    for(var i = 0; i < principes_array.length; i++) {
        var temp_principes = new ImageSurface({
            size: [200, 50],
            classes: ['test'],
            // properties: {
            //     backgroundColor: 'hsla(' + ((i*5 + i)*15 % 360) + ', 60%, 50%, 0.8)'
            // },
            content: principes_array[i]
        });

        temp_principes.on('click', function() {
           deck_principes.toggle();
        });
        principes_springSurfaces.push(temp_principes);
    }

    var principesSpringModifier = new Modifier({
        origin: [0.5, 0.5],
        align: [0.5, 0.5]
    });




    // End of Princi

    //var test = 1;
    //transitionableTransform2.setScale([test,test,0], {duration: 10});
    myScene.id["abn_logo"].add(centerSpinModifier).add(logo);
    myScene.id["main"].add(flipper);
    myScene.id["group2_rollen"].add(modifier).add(surfaceTwo);
    myScene.id["group3_rollen"].add(rollenSpringModifier).add(deck_rollen);
    myScene.id["group2_tools"].add(modifier2).add(surfaceThree);
    myScene.id["group3_tools"].add(toolsSpringModifier).add(deck_tools);
    //myScene.id["group2_principles"].add(positionModifier).add(surfaceFour);
    myScene.id["group2_principles"].add(modifier3).add(surfaceFour);
    myScene.id["group2_architectuur"].add(modifier4).add(archi_surface);
    myScene.id["group3_architectuur"].add(archiSpringModifier).add(deck_archi);
    myScene.id["group2_methodes"].add(modifier5).add(methodes_surface);
    myScene.id["group3_methodes"].add(methodesSpringModifier).add(deck_methodes);
    myScene.id["group2_modellen"].add(modifier6).add(modellen_surface);
    myScene.id["group3_modellen"].add(modellenSpringModifier).add(deck_modellen);
    myScene.id["group3_principes"].add(principesSpringModifier).add(deck_principes);

    
    
    //mainContext.add(centerSpinModifier).add(logo);


    mainContext.add(myScene);

    var toggle = false;
    surfaceOne.on('click', function(){
        var angle = toggle ? 0 : Math.PI;
        flipper.setAngle(angle, {curve : 'easeInOut', duration : 500});
        toggle = !toggle;
    });

    surfaceOne_rear.on('click', function(){
        var angle = toggle ? 0 : Math.PI;
        flipper.setAngle(angle, {curve : 'easeInOut', duration : 500});
        toggle = !toggle;
    });

    var zoom1 = false;
    surfaceTwo.on("click", function(){
        if (!zoom1){
            var x = 2;
            var y = 2;
            var z = 2;
        }
        else{
            var x = 1;
            var y = 1;
            var z = 1;
        }
        
        deck_rollen.toggle();        
                
        transitionableTransform.setScale([x,y,z], {duration: 600});
        zoom1 = !zoom1;
    });

    var zoom2 = false;
    surfaceThree.on("click", function(){
        if (!zoom2){
            var x = 2;
            var y = 2;
            var z = 2;
        }
        else{
            var x = 1;
            var y = 1;
            var z = 1;
        }

        deck_tools.toggle();
                
        transitionableTransform2.setScale([x,y,z], {duration: 600});
        zoom2 = !zoom2;
    });


    // archi zoomer
    var zoom3 = false;
    archi_surface.on("click", function(){
        if (!zoom3){
            var x = 2;
            var y = 2;
            var z = 2;
        }
        else{
            var x = 1;
            var y = 1;
            var z = 1;
        }

        deck_archi.toggle();
                
        transitionableTransform4.setScale([x,y,z], {duration: 600});
        zoom3 = !zoom3;
    });


    // methodes zoomer
    var zoom4 = false;
    methodes_surface.on("click", function(){
        if (!zoom4){
            var x = 2;
            var y = 2;
            var z = 2;
        }
        else{
            var x = 1;
            var y = 1;
            var z = 1;
        }

        deck_methodes.toggle();
                
        transitionableTransform5.setScale([x,y,z], {duration: 600});
        zoom4 = !zoom4;
    });

    // modellen zoomer
    var zoom5 = false;
    modellen_surface.on("click", function(){
        if (!zoom5){
            var x = 2;
            var y = 2;
            var z = 2;
        }
        else{
            var x = 1;
            var y = 1;
            var z = 1;
        }

        deck_modellen.toggle();
                
        transitionableTransform6.setScale([x,y,z], {duration: 600});
        zoom5 = !zoom5;
    });


    // Principes zoomer
    var zoom6 = false;
    surfaceFour.on("click", function(){
        if (!zoom6){
            var x = 2;
            var y = 2;
            var z = 2;
        }
        else{
            var x = 1;
            var y = 1;
            var z = 1;
        }

        deck_principes.toggle();
                
        transitionableTransform3.setScale([x,y,z], {duration: 600});
        zoom6 = !zoom6;
    });

});


//easeOutBounce