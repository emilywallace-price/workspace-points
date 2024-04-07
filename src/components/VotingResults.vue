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
import { db } from "@/firebase/init.js";
import { collection, getDocs, deleteDoc, onSnapshot } from 'firebase/firestore'

export default {
    name: "VotingResults",
    data() {
        return {
            'results': []
        }
    },
    mounted() {
        this.getResults();
    },
    methods: {
        async getResults() {
            try {
                const collectionRef = collection(db, 'votes');
                onSnapshot(collectionRef, (querySnapshot) => {
                    const results = {};

                    querySnapshot.forEach(doc => {
                        const data = doc.data();
                        if (data.vote) {
                            results[data.vote] = results[data.vote] ? results[data.vote] + 1 : 1;
                        }
                    });

                    this.results = results;
                });

            } catch (error) {
                console.error('Error getting documents: ', error);
            }
        },
        async reset() {
            try {
                const collectionRef = collection(db, 'votes');
                const querySnapshot = await getDocs(collectionRef);

                querySnapshot.forEach( doc => {
                     deleteDoc(doc.ref);
                });

                this.results = {};

                console.log('All entries deleted successfully');
            } catch (error) {
                console.error('Error deleting documents: ', error);
            }
        }
    }
}
</script>
