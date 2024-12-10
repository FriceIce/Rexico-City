<template>
 

    <div class="tickets-page">
        
        <header class="header">
            <h2>Prices & Tickets</h2>
            <h4>
                On this page, we have gathered season passes, tickets, and experiences for an epic day at Rexico city.
            </h4>
            <h3>Right now:</h3>
            <p>Christmas offer on the Gold Card 👀🦕</p>
            <p>Purchase one Gold Card and receive one Green Card absolutely free</p>
            <p>(Value at 42 $)</p>
        </header>
        <div class="cards">
            <div class="card-1">
                <h3></h3>
                <p></p>
            </div>
            <div class="card-2">
                <h3></h3>
                <p></p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TicketsPage',
    data() {
        return {
            // Add your data properties here
        };
    },
    methods: {
        // Add your methods here
    },
    mounted() {
        // Add any code to run when the component is mounted
    }
};
</script>





<style >
.tickets-page {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.header {
    margin-top: 4rem;
    background-color: rgb(9, 48, 36);
    margin-bottom: 20px;
    color: white;
    height: 30rem;
    width: 50rem;
    border-radius: 15px;
    /* border: 2px solid pink; */
}

.header h2{
    
    display: flex;
    justify-content: center;
    margin-top: 2.2rem;
    font-size: 4rem;
}

.header h3{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 2rem;
    font-size: 2rem;
}

.header h4{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 4rem;
    font-size: 1rem;
}

.header p{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 1rem;
    font-size: 1rem;
}
.cards {
    display: flex;
    gap: 20px;
    color: white;
}

.card-1 {
    background-image: url("../assets/images/dino_card.png");
    background-size: cover;
    background-position: center;
    border: 1px solid #ccc;
    width: 16rem;
    height: 10rem;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.card-2 {
    background-image: url("../assets/images/gold_card.png");
    background-size: cover;
    background-position: center;
    width: 16rem;
    height: 10rem;
    border: 1px solid #ccc;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

</style>