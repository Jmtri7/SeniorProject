// by: James Trinity
package game.entities;

import java.util.ArrayList;
import java.util.Arrays;
import java.awt.event.KeyEvent;

import engine.GameContainer;
import engine.Renderer;
import engine.gfx.ImageTile;

import game.board.Tile;

public class Grass extends Entity {
	private static ImageTile image = new ImageTile("../../res/tile/animatedGrass.png", 20, 40);

	private Animation sway = new Animation("sway", 0.5f, Arrays.asList(0, 1));

	public Grass(Tile tile) {
		super(tile, Grass.image);
		setTag("grass");
	}

	public void update(GameContainer gc, float dt) {
		if(sway.isActive()) sway.tick(dt);
		else sway.start();
	}

	public void render(GameContainer gc, Renderer r) {
		int tileSize = tile.getBoard().getTileSize();
		int tileX = tile.getX() * tileSize;
		int tileY = tile.getY() * tileSize;
		float spriteX = x - image.getTileW() / 2 + tileSize / 2;
		float spriteY = y - image.getTileH() + tileSize;
		r.drawImageTile(image, (int) spriteX, (int) spriteY, sway.getFrame(), 0);
	}
}