# picker

> selectColor

## SHOW

![Alt text](https://si.geilicdn.com/bj-app-1138109942-1492853419553-404563483_872_576.jpg)

![Alt text](https://si.geilicdn.com/bj-app-1138109942-1492853441479-1742097411_424_616.jpg)

## Installation

``` bash
npm install --save colorfule-picker
```

## Import

### Import for global
```
import Vue from 'vue'
import colorPicker from 'colorfule-picker'
Vue.use(colorPicker)

```

### Import for local
```
import colorPicker from 'colorfule-picker'
 
export default {
  components: {
    colorPicker,
  }
};
```

## CASE 
```
<color-picker v-if="display" :color="color"  @change="changeColor" :defaultColor='color' :width="62" :height="18" :boxTop="18" :boxLeft="-100"></color-picker>
```

## API
### props
参数 | 类型 | 说明
----|------|----
color | string  | 当前颜色值
defaultColor | String  | 默认颜色
disabled | Boolean  | 禁用状态
width | Number | 方块选择器的宽度(px)
height | Number | 方块选择器的高度(px)
boxTop | Number | 选择筐顶部定位(px)
boxLeft | Number | 选择框左边定位

### Events
事件名 | 参数 | 说明
----|------|----
change |    | 通过emit的方式向父级元素广播颜色值

