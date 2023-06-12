<template>
    <div style="height: 400px">
        <el-scrollbar ref="scrollbar" style="height: 100%">
            <div :style="`transform: translate(0, ${scrollTop}px)`">
                <!-- 121312 {{ startIndex }} -->
                <div v-for="item in showList" :key="item" style="height: 50px">
                    {{ item }}
                </div>
            </div>
            <div style="height: 10000px"></div>
        </el-scrollbar>
    </div>
</template>

<script>
// import Vue from 'vue'
// import Message from './message.vue'
export default {
    data() {
        return {
            scrollTop: 0,
            list: [],
            showList: [],
            index: 0
        }
    },
    mounted() {
        for (let i = 0; i < 1000; i++) {
            this.list.push(i)
        }
        this.handleScroll()
    },
    methods: {
        handleScroll() {
            let scrollbarEl = this.$refs.scrollbar.wrap
            scrollbarEl.onscroll = (e) => {
                console.log(e.target.scrollTop)
                if (e.target.scrollTop > 500) {
                    if (Math.abs(this.index - e.target.scrollTop) > 500) {
                        this.scrollTop = e.target.scrollTop - 500
                        this.index = e.target.scrollTop
                        this.startIndex = parseInt(e.target.scrollTop / 50 )
                        this.showList = this.list.slice(this.startIndex, this.startIndex + 30)   
                    }
                } else {
                    this.scrollTop = e.target.scrollTop
                    this.index = e.target.scrollTop
                    this.startIndex = parseInt(e.target.scrollTop / 50 )
                    this.showList = this.list.slice(this.startIndex, this.startIndex + 30)
                }
            } 
        }
    }
}
</script>

<style lang="scss" scoped>

</style>