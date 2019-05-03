<template>
     <div>
        <h3>Fruits Details</h3>
        <p>Fruits ID: {{ $route.params.id }}</p>
        <router-link
                tag="button"
                :to="{ name: 'fruitEdit', params: { id: $route.params.id }, query: { locale: 'VN', q: 'I' } }"
                class="btn btn-dark">Edit Fruits</router-link>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
