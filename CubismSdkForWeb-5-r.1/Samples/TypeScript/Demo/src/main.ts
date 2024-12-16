/**
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */

import { LAppDelegate } from './lappdelegate';
import * as LAppDefine from './lappdefine';
import { LAppGlManager } from './lappglmanager';
import {LAppLive2DManager} from './lapplive2dmanager';


function handleButtonClick(buttonId: string) {
  console.log(`Button ${buttonId} clicked!`);
  LAppLive2DManager.getInstance().triggerAction('Action'+ buttonId)
}

// Adding event listeners for the buttons
window.onload = () => {
  const button1 = document.getElementById('button1');
  const button2 = document.getElementById('button2');
  const button3 = document.getElementById('button3');
  const button4 = document.getElementById('button4');
  const button5 = document.getElementById('button5');
  const button6 = document.getElementById('button6');
  const button7 = document.getElementById('button7');
  const button8 = document.getElementById('button8');
  const button9 = document.getElementById('button9');
  const button10 = document.getElementById('button10');

  if (button1) {
      button1.addEventListener('click', () => handleButtonClick('1'));
  }
  if (button2) {
      button2.addEventListener('click', () => handleButtonClick('2'));
  }
  if (button3) {
    button3.addEventListener('click', () => handleButtonClick('3'));
  }
  if (button4) {
    button4.addEventListener('click', () => handleButtonClick('4'));
  }
  if (button5) {
    button5.addEventListener('click', () => handleButtonClick('5'));
  }
  if (button6) {
      button6.addEventListener('click', () => handleButtonClick('6'));
  }
  if (button7) {
    button7.addEventListener('click', () => handleButtonClick('7'));
  }
  if (button8) {
    button8.addEventListener('click', () => handleButtonClick('8'));
  }
  if (button9) {
    button9.addEventListener('click', () => handleButtonClick('9'));
  }
  if (button10) {
    button10.addEventListener('click', () => handleButtonClick('10'));
  }
};

/**
 * ブラウザロード後の処理
 */
window.addEventListener(
  'load',
  (): void => {
    // Initialize WebGL and create the application instance
    if (
      !LAppGlManager.getInstance() ||
      !LAppDelegate.getInstance().initialize()
    ) {
      return;
    }

    LAppDelegate.getInstance().run();
  },
  { passive: true }
);

/**
 * 終了時の処理
 */
window.addEventListener(
  'beforeunload',
  (): void => LAppDelegate.releaseInstance(),
  { passive: true }
);

/**
 * Process when changing screen size.
 */
window.addEventListener(
  'resize',
  () => {
    if (LAppDefine.CanvasSize === 'auto') {
      LAppDelegate.getInstance().onResize();
    }
  },
  { passive: true }
);
