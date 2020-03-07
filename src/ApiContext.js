import React from 'react'

export default React.createContext({
  teams: [],
  user: null,
  addTeam: () => {},
  getTeams: () => {},
  deleteTeam: () => {},
  setUser: () => {},
})
