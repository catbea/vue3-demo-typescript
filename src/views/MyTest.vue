<template>
  <div class="test">
    <h1>mytest page</h1>
    <h2>test count {{count}}</h2>
    <div>computed：count * 2 = {{doubleCount}}</div>
    <div>Vue3.0 myState from Vuex：{{myState}} </div><br>
    <button @click="addCount">add+</button><br><br>
    <button @click="updateMyState">updateMyState</button>
  </div>
</template>
<script>
import { ref, computed, watch, getCurrentInstance } from 'vue'
export default {
  setup () {
    const count = ref(0)
    const { ctx } = getCurrentInstance()
    console.log('打印路由属性：', ctx.$router)
    const addCount = () => {
      count.value++
    }
    // 更新state的状态
    const updateMyState = () => {
      ctx.$store.commit('setMyState', 11)
    }
    watch(() => count.value, val => {
      console.log(`监听的count的值变化了：${val}`)
    })
    const doubleCount = computed(() => count.value * 2)
    const myState = computed(() => ctx.$store.state.myState)
    return {
      count,
      doubleCount,
      addCount,
      myState,
      updateMyState
    }
  }
}
</script>
<style lang="less" scoped>
.test {
  color: red;
}
</style>
