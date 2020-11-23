// by: James Trinity
package game;

import java.util.HashMap;
import java.util.Map;

import engine.audio.SoundClip;

public class AudioLoader {
	private static HashMap<String, SoundClip> map = new HashMap<String, SoundClip>();

	public static void loadAudio(String id, String path) {
		map.put(id, new SoundClip(path));
	}

	public static SoundClip getAudio(String id) {
		SoundClip image = map.get(id);

		if(image == null) System.out.println("Failed to get audio: (" + id + ")");

		return image;
	}

	// attempts to load from map first
	public static SoundClip safeLoad(String id, String path) {
		SoundClip image = map.get(id);

		if(image == null) {
			System.out.println("Audio (" + id + ") wasn't pre loaded.");

			map.put(id, new SoundClip(path));
		}

		return map.get(id);
	}
}