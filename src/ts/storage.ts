// @ts-ignore
import create from "@/components/AppCreate";

export default {
    name: 'storage',
    data() {
        return {
            show: false,
            context: false,
            auth: false,
            showCreateFolders: false,
            folderName: '',
            items: [
                { text: 'Real-Time'},
                { text: 'Audience'},
                { text: 'Conversions'},
            ],
            view: localStorage.getItem('view'),
            folders: [
                {
                    name: 'Folder',
                    size: '123 kb',
                    id: '1',
                },
                {
                    name: 'Folder 2',
                    size: '1233 kb',
                    id: '2',
                },
                {
                    name: 'Folder 3',
                    size: '1245 kb',
                    id: '3',
                }

            ]
        }
    },
    components: {
        create
    },
    methods: {
        changeView(value) {
            this.view = value;
            localStorage.view = this.view
        },
        hiddenPopup() {
            this.context = false;

        },
        handler: function(e) {
            e.preventDefault();
            this.context = true;
        }
},
    beforeMount(){
        if (!window.localStorage.getItem('token')) {
            window.history.pushState("No auth", "Cloud Storage", "/auth")
            location.reload();
        }
        else {
            window.history.pushState("object or string", "Title", "/")
            this.show = true
        }
    },
}
