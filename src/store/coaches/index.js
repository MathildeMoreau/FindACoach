export default {
  namespaced: true,
  state: {
    coaches: [],
    currentCoach: null,
    workField: []
  },
  getters: {
    getAllCoaches(state) {
      return state.coaches;
    },
    getCurrentCoach(state) {
      console.log(state);
      return state.currentCoach;
    },
    hasCoaches(state){
      return state.coaches && state.coaches.length > 0;
    }
  },
  mutations: {
    setCurrentCoach(state, payload) {
      const currentCoach = state.coaches.find((coach) => {
        return coach.id == payload;
      });

      state.currentCoach = currentCoach;
    },
    createNewCoach(state, payload) {
      fetch(
        "https://coaching-project-df168-default-rtdb.europe-west1.firebasedatabase.app/coaches.json",
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            firstName: payload.firstName,
            lastName: payload.lastName,
            areas: payload.areas,
            description: payload.description,
            hourlyRate: payload.hourlyRate,
          }),
        }
      );
    },
    setCoaches(state, payload){
      state.coaches = payload;
    }
  },
  actions: {
    addCoach(context, payload) {
      context.commit("createNewCoach", payload);
    },
    async getAllCoachesFromDb(context) {
      try {
        const response = await fetch(
          "https://coaching-project-df168-default-rtdb.europe-west1.firebasedatabase.app/coaches.json"
        );

        if (!response.ok) {
          throw new Error("Erreur de récupération des données");
        }

        const data = await response.json();
        const results = [
          {
            id: "c1",
            firstName: "Maximilian",
            lastName: "Schwarzmüller",
            areas: {
              isValid: true,
              value: ["frontend", "backend", "career"]
            },
            description:
              "I'm Maximilian and I've worked as a freelance web developer for years. Let me help you become a developer as well!",
            hourlyRate: 30,
          },
          {
            id: "c2",
            firstName: "Julie",
            lastName: "Jones",
            areas: {
              isValid: true,
              value: ["frontend", "career"]
            },
            description:
              "I am Julie and as a senior developer in a big tech company, I can help you get your first job or progress in your current role.",
            hourlyRate: 30,
          },
        ]

        for (const d in data) {
          results.push({
            id: d,
            firstName: data[d].firstName,
            lastName: data[d].lastName,
            areas: data[d].areas,
            description: data[d].description,
            hourlyRate: data[d].hourlyRate,
          });
        }

        context.commit('setCoaches', results);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
