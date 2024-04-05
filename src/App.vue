<script>
import Votes from './components/Votes.vue'
import VotingResults from './components/VotingResults.vue'
export default {
    name: 'App',
    components: {
        VotingResults,
        Votes
    },
    data() {
        return {
            options: [1, 2, 3, 5, 8],
            results: {
                1: 0,
                2: 0,
                3: 0,
                5: 0,
                8: 0
            }
        };
    },
    methods: {
        handleVote(option) {
            this.results[option]++;
        }
    }
}
</script>

<template>
    <header>
        <img alt="TW logo" class="logo" src="./assets/tw.svg" width="125" height="125" />
        <img alt="Shortcut logo" class="logo" src="./assets/shortcut.png" width="125" height="100" />
    </header>

    <main>
        <h2>Choose your est. Effort Points:</h2>
        <div>
            <Votes :options="options" @vote="handleVote" />
        </div>
        <VotingResults :results="results" />
    </main>
</template>

<style scoped>
header {
    line-height: 1.5;
}

.logo {
    display: block;
    margin: 0 auto 2rem;
}

</style>
