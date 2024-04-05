<template>
    <div class="wrapper">
        <div v-for="option in options" :key="option">
            <button @click="vote(option)" class="card">{{ option }}</button>
        </div>
    </div>

</template>

<script>
export default {
    name: 'Votes',
    props: ['options'],
    methods: {
        vote(option) {
            this.$emit('vote', option);
        }
    }
};
</script>
