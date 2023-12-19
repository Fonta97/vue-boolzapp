const { createApp } = Vue;

createApp({
    data() {
        return {
            activeContact: '',
            contacts: [
                {
                    name: 'Michele',
                    avatar: './img/avatar_1.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: './img/avatar_2.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            message: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Samuele',
                    avatar: './img/avatar_3.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            message: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            message: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro B.',
                    avatar: './img/avatar_4.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                },
            ],
            searchQuery: '',
            newMessage: ''
        }
    },

    // funzioni
    methods: {
        fetchLastMsg(contact) {
            const lastMessage = contact.messages[contact.messages.length - 1];
            return lastMessage.message;
        },

        selectContact(contact) {
            this.activeContact = contact;
        },

        // DEBUG
        sendMessage() {
            if (this.newMessage.trim() === '') return;

            // Aggiungi il messaggio inviato dall'utente
            this.activeContact.messages.push({
                date: new Date().toLocaleString(),
                message: this.newMessage,
                status: 'sent'
            });

            // Simula la risposta automatica dopo 1 secondo
            setTimeout(() => {
                this.activeContact.messages.push({
                    date: new Date().toLocaleString(),
                    message: 'Ok',
                    status: 'received'
                });
            }, 1000);

            this.newMessage = '';
            // Pulisci l'input dopo l'invio del messaggio
        }

    },

    // utilizzo del computed perchè ho trovato online che il computed è più rapido come richiesta anzichè methods 
    computed: {
        filteredContacts() {
            return this.contacts.filter(contact =>
                contact.name.toLowerCase().includes(this.searchQuery.toLowerCase())
            );
        },

        // DEBUG
        activeContactMessages() {
            if (!this.activeContact) return [];

            return this.activeContact.messages;
        }

    }


}).mount('#app')