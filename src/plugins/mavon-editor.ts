import { App } from 'vue';
import mavonEditor from 'mavon-editor';
import 'mavon-editor/dist/css/index.css';

export function useMavonEditor(app: App) {
  app.use(mavonEditor);
}
