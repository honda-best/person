const personGenerator = {
  lastNameJson: `{  
      "count": 15,
      "list": {
          "id_1": "Иванов",
          "id_2": "Смирнов",
          "id_3": "Кузнецов",
          "id_4": "Васильев",
          "id_5": "Петров",
          "id_6": "Михайлов",
          "id_7": "Новиков",
          "id_8": "Федоров",
          "id_9": "Кравцов",
          "id_10": "Николаев",
          "id_11": "Семёнов",
          "id_12": "Славин",
          "id_13": "Степанов",
          "id_14": "Павлов",
          "id_15": "Александров"
      }
  }`,
  firstNameMaleJson: `{
      "count": 10,
      "list": {     
          "id_1": "Александр",
          "id_2": "Максим",
          "id_3": "Иван",
          "id_4": "Артем",
          "id_5": "Дмитрий",
          "id_6": "Никита",
          "id_7": "Михаил",
          "id_8": "Даниил",
          "id_9": "Егор",
          "id_10": "Андрей"
      }
  }`,
  secondNameMaleJson: `{
      "count": 5,
      "list": {     
          "id_1": "Иванович",
          "id_2": "Васильевич",
          "id_3": "Петрович",
          "id_4": "Михайлович",
          "id_5": "Николаевич"
      }
  }`,
  secondNameFeMaleJson: `{
      "count": 5,
      "list": {
          "id_1": "Ивановна",
          "id_2": "Васильевна",
          "id_3": "Петровна",
          "id_4": "Михайловна",
          "id_5": "Николаевна"
      }
  }`,
  firstNameFeMaleJson: `{
      "count": 10,
      "list": {     
          "id_1": "Александра",
          "id_2": "Анастасия",
          "id_3": "Яна",
          "id_4": "Лина",
          "id_5": "Дарья",
          "id_6": "Ксения",
          "id_7": "Мария",
          "id_8": "Алена",
          "id_9": "Людмила",
          "id_10": "Марина"
      }
  }`,

  professionMaleJson: `{
      "count": 5,
      "list": {     
          "id_1": "слесарь",
          "id_2": "солдат",
          "id_3": "шахтер",
          "id_4": "программист",
          "id_5": "строитель"
       }
  }`,
  professionFeMaleJson: `{
      "count": 5,
      "list": {     
          "id_1": "доктор",
          "id_2": "педагог",
          "id_3": "библиотекарь",
          "id_4": "аптекарь",
          "id_5": "инженер"
       }
  }`,

  GENDER_MALE: 'Мужчина',
  GENDER_FEMALE: 'Женщина',

  randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),

  randomValue: function (json) {
      let obj = JSON.parse(json);
      let prop = `id_${this.randomIntNumber(obj.count, 1)}`;  // this = personGenerator
      return obj.list[prop];
  },

  randomFirstNameMale: function () {
  //имя м
      return this.randomValue(this.firstNameMaleJson);

  },

  randomSecondNameMale: function () {
  //отч м
      return this.randomValue(this.secondNameMaleJson);

  },

  randomSecondNameFeMale: function () {
  //отч ж
      return this.randomValue(this.secondNameFeMaleJson);

  },

  randomFirstNameFeMale: function () {
  //имя ж
      return this.randomValue(this.firstNameFeMaleJson);

  },


  randomLastName: function () {
  //фамилия
      return this.randomValue(this.lastNameJson);

  },

  randomProfessionFeMale: function () {
  //проф ж
      return this.randomValue(this.professionFeMaleJson);

  },

  randomProfessionMale: function () {
  //проф м
      return this.randomValue(this.professionMaleJson);

  },

  //пол
  randomGender: function () {
    let male = this.randomIntNumber(1, 0);
    male == 1 ? this.male = this.GENDER_MALE : this.male = this.GENDER_FEMALE;
    return this.male;
  },

  getPerson: function () {
      this.person = {};
      this.person.gender = this.randomGender();
      this.person.lastName = this.randomLastName();

      if (this.person.gender == this.GENDER_FEMALE) {
          this.person.lastName += 'a';
          this.person.firstName = this.randomFirstNameFeMale();
          this.person.profession = this.randomProfessionFeMale();
          this.person.secondName = this.randomSecondNameFeMale();
      }
      else {
          this.person.firstName = this.randomFirstNameMale();
          this.person.profession = this.randomProfessionMale();
          this.person.secondName = this.randomSecondNameMale();
      }

      this.person.year = Math.floor(Math.random() * (2000 - 1950 + 1) + 1950);

      date = String(Math.floor(Math.random() * (2000 - 1950 + 1) + 1950));
      this.person.year = date;
      return this.person;
  }
}
