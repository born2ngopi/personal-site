<template>
    <div >
        <!-- create tag a and put props link to href -->
        <a :href="Link">
            <div 
                class="
                    border-solid 
                    border-2 
                    border-slate-200 
                    dark:border-slate-400
                    rounded-sm
                    p-4 
                    mt-4
                    hover:dark:bg-slate-400
                    hover:bg-slate-200"
            >
                <!-- title -->
                <div class="flex justify-between">
                    <p class="pt-2 dark:text-gray-200 font-semibold">{{ title }}</p>
                    <!-- loops icon -->
                    <div class="grid grid-cols-2 gap-2">
                        <div v-for="icon in Icon">
                            <UIcon class="w-10 h-10" :name="icon" dynamic/>
                        </div>
                    </div>
                </div>
                <!-- set description -->
                <p class="">{{ description }}</p>
            </div>
        </a>
    </div>
</template>

<script>


export default {
    name: 'CardProject',
    props: {
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        Icon: {
            // array of strings
            type: Array,
            required: true
        },
        Link: {
            type: String,
            required: true
        }
    }
}

</script>

<style scoped>
/* check if title hovered */
#title:hover {
    color: red;
}
</style>