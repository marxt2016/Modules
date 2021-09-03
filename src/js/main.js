import { ItemsArray } from "./card.js";
import '../styles.css';

const importAll = (r) => r.keys().forEach(r);
importAll(require.context('../media/images', true, /\.(jpe?g|png|gif|svg)$/i));
importAll(require.context('../media/audio', true, /\.mp3$/i));
importAll(require.context('../media/video', true, /\.mp4$/i));

const container = document.getElementById('container');
const items = new ItemsArray();

items.makeResultingSet(container);