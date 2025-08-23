import type { IGameStatus } from "#shared/types/games"

export const useGameStatus = (date?:string) => {
  
  const status = ref<IGameStatus>()
  if (!date) {
    status.value = {
      status: 'Concept',
      status_id: 'concept',
      comingSoon: false,
    }
    
  } else {
    const now = new Date()
    const releaseDate = new Date(date)
    if (releaseDate > now) {
      // coming soon if the release date is less than 1 year from now
     const timeDiff = releaseDate.getTime() - now.getTime()
      const oneYear = 365 * 24 * 60 * 60 * 1000 // milliseconds in a year
      
      status.value = {
        status: 'Work in progress',
        status_id: 'in_progress',
        comingSoon: timeDiff < oneYear,
        now,
        releaseDate,
        timeDiff
      }
    } else if (releaseDate <= now) {
      status.value = {
        status: 'Released',
        status_id: 'released',
        now,
        releaseDate,
      }
    }
  }
  
  
  return status
}
