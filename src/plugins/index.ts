import { App } from 'vue';
import { useElementPlus } from './element-plus';
import { useMavonEditor } from './mavon-editor';
import { useVueGridLayout } from './vue-grid-layout';

export function usePlugins(app: App) {
  useElementPlus(app);
  useMavonEditor(app);
  useVueGridLayout(app);
}
