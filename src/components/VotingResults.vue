<template>
    <div>
        <h2>Points Results:</h2>
        <ul>
            <li v-for="(count, option) in results" :key="option">{{ option }} points : <span>{{ count }}</span></li>
        </ul>
        <button @click="reset" class="reset">Reset</button>
    </div>
</template>

<script>
export default {
    name: "VotingResults",
    props: ['results'],
    methods: {
        reset() {
            for (let key in this.results) {
                this.results[key] = 0;
            }
        }
    }
}
</script>
