import { TypedTypePolicies } from './generated/apollo-helpers'

const typePolicies: TypedTypePolicies = {
  Query: {
    fields: {
      favoriteRooms: {
        merge(_existing, _incoming) {
          return _incoming
        },
      },
      searchRoom: {
        merge(_existing, _incoming) {
          return _incoming
        },
      },
      getRoomOccupied: {
        merge(_existing, _incoming) {
          return _existing
        },
      },
    },
  },
  Room: {
    merge: true,
    keyFields: ['id'],
    fields: {
      reviews: {
        merge(_existing, _incoming) {
          return _incoming
        },
      },
    },
  },
  Booking: {
    merge: true,
    keyFields: ['id'],
  },
  PushNotification: {
    merge(_existing, _incoming) {
      return _incoming
    },
    keyFields: ['id'],
  },
  Member: {
    merge: true,
    fields: {
      logos: {
        merge(_existing, _incoming) {
          return _incoming
        },
      },
    },
  },
}

export default typePolicies
