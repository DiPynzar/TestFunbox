const catsData = [
  {
    id: 0,
    taste: 'фуа-гра',
    amount: 10,
    mouseBonus: 1,
    note: null,
    weight: 0.5,
    description: {
      initial: 'Чего сидишь? Порадуй котэ, купи.',
      selected: 'Печень утки разваная с артишоками',
      disabledText: `Печалька, с фуа-гра закончились`
    },
    isDisabled: false
  },
  {
    id: 1,
    taste: 'рыбой',
    amount: 40,
    mouseBonus: 2,
    note: null,
    weight: 2,
    description: {
      initial: 'Чего сидишь? Порадуй котэ, купи.',
      selected: 'Головы щучьи с чесноком да сежайшая сёмгушка.',
      disabledText: `Печалька, с рыбой закончились`
    },
    isDisabled: false
  },
  {
    id: 2,
    taste: 'курой',
    amount: 100,
    mouseBonus: 5,
    note: 'заказчик доволен',
    weight: 5,
    description: {
      initial: 'Чего сидишь? Порадуй котэ, купи.',
      selected: 'Филе из цыплят с тефтелями в бульоне',
      disabledText: `Печалька, с курой закончились`
    },
    isDisabled: true
  }
]

export default catsData