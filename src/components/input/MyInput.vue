<template>

    <div>
        <label class="label" for="">{{text}}</label>
        <input class="input" :type="type" :placeholder="placeholder">
    </div>
    
</template>

<script>
export default {
    name: 'MyInput',
    props: {
        text: {type: String, require},
        placeholder: { type: String },
        type: { type: String, default: 'text' }
    },
    data(){

    }
}
</script>

<style scoped>

.input{
    margin-top: 1px;
    margin-bottom: 15px;
    display: flex;
    flex-direction: column;
    padding: 10px;
    width: 100%;
    outline: none;
    border: 1px solid #333;
    border-radius: 4px;
    box-sizing: border-box;
}

</style>