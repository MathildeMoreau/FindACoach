export default {
  namespaced: true,
  state: {
    messages: []
  },
  getters: {
    getAllMessages(state){
      return state.messages;
    }
  },
  mutations: {
    sendMessage(state, payload) {
      console.log(state);
      console.log(payload);
    }
   
  },
  actions: {
    async getAllMessagesFromDb(context) {
      try {
        const response = await fetch(
          "https://coaching-project-df168-default-rtdb.europe-west1.firebasedatabase.app/messages.json"
        );

        if (!response.ok) {
          throw new Error("Erreur de récupération des messages");
        }

        const data = await response.json();
        for (const d in data) {
          context.state.messages.push({
            id: d,
            email: data[d].email,
            message: data[d].message
          });
        }
      } catch (error) {
        console.log(error);
      }
    },
    contactCoach(context, payload){
      console.log('tesstttt');
      const newRequest = {
        email: payload.email,
        message: payload.message
      }
  
      fetch(
        "https://coaching-project-df168-default-rtdb.europe-west1.firebasedatabase.app/messages.json",
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(newRequest),
        }
      )
      context.commit('sendMessage', newRequest);
    }
  },
};
