<template>
 

    <div class="tickets-page">
        
        <header class="header">
            <div><h2>Prices and Tickets</h2>
            <div><h4>
                On this page, we have gathered season passes, tickets, and experiences for an epic day at Rexico city.
<h4>Right now:</h4>

<p>Christmas offer on the Gold Card 👀🎢</p>
<p>Purchase one Gold Card and receive one Green Card absolutely free</p>
<p>(Value at 420 $)</p>

    </h4></div> 
    </div>
        </header>
        <div class="cards">
            <div class="card">
                <h3></h3>
                <p>Dino Card</p>
            </div>
            <div class="card">
                <h3></h3>
                <p>Gold Card</p>
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
    margin-top: 1rem;
    font-size: 3rem;
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

.card {
    border: 1px solid #ccc;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
</style>