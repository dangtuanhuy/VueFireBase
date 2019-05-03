<template>
<div>
     <p>Please select a Fruits</p>
        <hr>
        <ul class="list-group">
            <router-link
                    tag="li"
                    to="/fruit/1"
                    class="list-group-item list-group-item-success"
                    style="cursor: pointer">Apple</router-link>
            <router-link
                    tag="li"
                    to="/fruit/2"
                    class="list-group-item"
                    style="cursor: pointer">Mango</router-link>
            <router-link
                    tag="li"
                    to="/fruit/3"
                    class="list-group-item list-group-item-success"
                    style="cursor: pointer">Durian</router-link>
                    <router-link
                    tag="li"
                    to="/fruit/4"
                    class="list-group-item"
                    style="cursor: pointer">Grapefruit</router-link>
        </ul>
</div>
</template>

<script>
export default {

}
</script>

<style>

</style>
