<template>
    <div :class="classObject" @click="captureClick">{{ day.format('D') }}</div>
</template>
<script>
    export default {
        props: [ 'day' ],
        computed: {
            classObject() {
                let today = this.day.isSame(this.$moment(), 'day');
                return {
                    day: true,
                    today,
                    past: this.day.isSameOrBefore(this.$moment(), 'day') && !today
                };
            }
        },
        methods: {
            captureClick(e) {
                console.log(e.clientY)
                this.$store.commit('eventFormPosition', { x: e.clientX, y: e.clientY})
            }
        }
    }
</script>