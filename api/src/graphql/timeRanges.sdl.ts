export const schema = gql`
  type TimeRange {
    id: Int!
    startTime: Int!
    endTime: Int!
    createdAt: DateTime!
    event: Event!
    eventId: Int!
    userAvailabilities: [UserAvailability]!
  }

  type Query {
    timeRanges: [TimeRange!]! @requireAuth
    timeRange(id: Int!): TimeRange @requireAuth
  }

  input CreateTimeRangeInput {
    startTime: Int!
    endTime: Int!
    eventId: Int!
  }

  input UpdateTimeRangeInput {
    startTime: Int
    endTime: Int
    eventId: Int
  }

  type Mutation {
    createTimeRange(input: CreateTimeRangeInput!): TimeRange! @requireAuth
    updateTimeRange(id: Int!, input: UpdateTimeRangeInput!): TimeRange!
      @requireAuth
    deleteTimeRange(id: Int!): TimeRange! @requireAuth
  }
`;
