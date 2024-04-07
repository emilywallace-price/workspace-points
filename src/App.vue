<script>
import Votes from './components/Votes.vue'
import VotingResults from './components/VotingResults.vue'
import { db } from "@/firebase/init.js";
import { collection, addDoc } from 'firebase/firestore'

export default {
    name: 'App',
    components: {
        VotingResults,
        Votes
    },
    data() {
        return {
            options: [1, 2, 3, 5, 8],
        };
    },
    methods: {
        async handleVote(option) {
            try {
                const colRef = collection(db, 'votes');

                const dataObj = {
                    vote: option
                };

                const docRef = await addDoc(colRef, dataObj);

            } catch (error) {
                console.error('Error adding vote: ', error);
            }
        },
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
        <VotingResults />
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
