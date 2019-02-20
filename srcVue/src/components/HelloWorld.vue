<template>
    <div>
        <v-toolbar app>
            <v-toolbar-title class="headline text-uppercase">
                <span>Vuetify</span>
                <span class="font-weight-light"> {{ curPath }}</span>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn
                    flat
                    href="https://github.com/vuetifyjs/vuetify/releases/latest"
                    target="_blank"
            >
                <span class="mr-2">Latest Release</span>
            </v-btn>
        </v-toolbar>

        <v-treeview
                v-model="tree"
                :open="open"
                :items="items"
                activatable
                item-key="name"
                open-on-click
        >
            <template slot="prepend" slot-scope="{ item, open }">
                <v-icon v-if="!item.file">
                    {{ open ? 'mdi-folder-open' : 'mdi-folder' }}
                </v-icon>
                <v-icon v-else>
                    {{ files[item.file] }}
                </v-icon>
            </template>
        </v-treeview>
        <br>
        <div class="debug">
            {{ print }}<br>
            {{ globDir }}
        </div>

    </div>
</template>

<script>
    let vm;
    export default {
        data() {
            return {
                print: 'print_init',
                homeDir: 'homedir_init',
                globDir: 'globdir_init',
                curPath: 'curPath_init',
                open: ['public'],
                files: {
                    html: 'mdi-language-html5',
                    js: 'mdi-nodejs',
                    json: 'mdi-json',
                    md: 'mdi-markdown',
                    pdf: 'mdi-file-pdf',
                    png: 'mdi-file-image',
                    txt: 'mdi-file-document-outline',
                    xls: 'mdi-file-excel'
                },
                tree: [],
                items: [
                    {
                        name: '.git'
                    },
                    {
                        name: 'node_modules'
                    },
                    {
                        name: 'public',
                        children: [
                            {
                                name: 'static',
                                children: [{
                                    name: 'logo.png',
                                    file: 'png'
                                }]
                            },
                            {
                                name: 'favicon.ico',
                                file: 'png'
                            },
                            {
                                name: 'index.html',
                                file: 'html'
                            }
                        ]
                    },
                    {
                        name: '.gitignore',
                        file: 'txt'
                    }
                ]
            }
        },
        async created() {
            console.log('hi');
            vm = this;
            vm.items[2].name = "fu"
            vm.curPath = await curPath();
            vm.homePath = await homePath();
            vm.globDir = await globDir(vm.homePath);
        }
    }
</script>

<style>
.debug {
    color: green;
}
</style>
