/// <reference path="../../Phaser/tilemap/Tilemap.ts" />
/// <reference path="../../Phaser/Game.ts" />

(function () {

    var game = new Phaser.Game(this, 'game', 800, 600, preload, create, update);

    function preload() {

        //  Tiled Tilemap Test

        //  First we load our map data (a json file exported from the map editor Tiled)
        game.load.text('jsontest', 'assets/maps/test.json');
        //myGame.loader.addTextFile('jsontest', 'assets/maps/multi-layer-test.json');

        //  Then we load the actual tile sheet image
        game.load.image('jsontiles', 'assets/tiles/platformer_tiles.png');

        

    }

    function create() {

        //  This creates the tilemap using the json data and tile sheet we loaded.
        //  We tell it to use the Tiled JSON format parser.
        game.add.tilemap('jsontiles', 'jsontest', Phaser.Tilemap.FORMAT_TILED_JSON);

    }

    function update() {

        //  Simple camera controls
        if (game.input.keyboard.isDown(Phaser.Keyboard.LEFT))
        {
            game.camera.x -= 4;
        }
        else if (game.input.keyboard.isDown(Phaser.Keyboard.RIGHT))
        {
            game.camera.x += 4;
        }

        if (game.input.keyboard.isDown(Phaser.Keyboard.UP))
        {
            game.camera.y -= 4;
        }
        else if (game.input.keyboard.isDown(Phaser.Keyboard.DOWN))
        {
            game.camera.y += 4;
        }

    }

})();
