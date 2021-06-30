<template>
    <div class="loading">
        <span></span>
    </div>
</template>
<script>
export default {
    name: 'loading'
}
</script>

<style lang="scss" scoped>
    .loading {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 101;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;
        @keyframes spin {
            to {
                transform: translateZ(360deg);
            }
        }
        span {
            display: block;
            width: 60px;
            height: 60px;
            margin: 0 auto;
            border: 3px solid transparent;
            border-top-color: #fff;
            border-bottom-color:#fff;
            border-radius: 50%;
            animation: spin ease 1000ms infinite;
        }
    }
</style>