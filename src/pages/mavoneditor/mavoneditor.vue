<template>
  <div class="container">
    <div>
      <span>
        mavonEditor - A markdown editor based on Vue that supports a variety of personalized features
      </span>
    </div>
    <div id="editor">
      <mavon-editor
        style="height: 100%"
        v-model="code"
        :codeStyle="codeStyle"
        :xssOptions="xssOptions"
      ></mavon-editor>
    </div>
    <div class="switch-code-style">
      <span>code style:</span>
      <select v-model="codeStyle">
        <option v-for="(val, key) in stylesAll" :value="key">{{ key }}</option>
      </select>
    </div>
  </div>
</template>

<layout>
layout: default
</layout>

<script script lang="ts">
import { defineComponent, computed, ref, reactive } from 'vue';
import styles from './lang.hljs';

const codeJava = `java
/**
 * @author John Smith <john.smith@example.com>
*/
package l2f.gameserver.model;
public abstract strictfp class L2Char extends L2Object {
  public static final Short ERROR = 0x0001;
  public void moveTo(int x, int y, int z) {
    _ai = null;
    log("Should not be called");
    if (1 > 5) { // wtf!?
      return;
    }
  }
}`;
export default {
  name: 'Markdown',
  components: {},
  
  setup() {
    const codeStyle = ref('github');
    const xssOptions = reactive({
        whiteList: {
          span: ['style']
        }
      })
    const code = '<span style="color:red;font-size:36px;">A</span> \n```' +
        codeJava +
        '\n```'
    const stylesAll = styles
    return {
      codeStyle,
      xssOptions,
      code,
      stylesAll
    };
  }
  // data: function () {
  //   return {
  //     codeStyle: 'github',
  //     code:
  //       '<span style="color:red;font-size:36px;">A</span> \n```' +
  //       codeJava +
  //       '\n```',
  //     xssOptions: {
  //       whiteList: {
  //         span: ['style']
  //       }
  //     }
  //   };
  // }
};
</script>
<style>
.container {
  margin: auto;
  width: 80%;
}
#editor {
  height: 580px;
}
.switch-code-style {
  margin-top: 10px;
  font-size: 16px;
}
</style>
