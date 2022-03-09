import { App } from 'vue';
import VueGridLayout from 'vue-grid-layout'

export function useVueGridLayout(app: App) {
  app.use(VueGridLayout);
}
