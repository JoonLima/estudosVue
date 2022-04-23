<template>
    <button class="btn" @click="callback" >{{text}}</button>
</template>

<script>
export default {
    name: 'MyButton',
    props: {
        text: { type: String, require },
        callback: { type: Function, default:() => {} }
    }
    
}
</script>

<style scoped>

.btn {
    width: 100%;
    background-color: #333;
    color: #fff;
    padding: 10px;
    margin: 8px 0;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 17px;
}

.btn:hover {
    color: #ffbb33;
}

</style>