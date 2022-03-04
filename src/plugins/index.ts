import { App } from 'vue';
import { useElementPlus } from './element-plus';
import { useMavonEditor } from './mavon-editor';

export function usePlugins(app: App) {
  useElementPlus(app);
  useMavonEditor(app);
}
