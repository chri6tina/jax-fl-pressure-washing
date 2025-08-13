// Notification Sound Utilities
export const notificationSounds = {
  // Play a pleasant "ding" sound
  playDing: () => {
    try {
      const audioContext = new (window.AudioContext || window.webkitAudioContext)()
      const oscillator = audioContext.createOscillator()
      const gainNode = audioContext.createGain()

      oscillator.connect(gainNode)
      gainNode.connect(audioContext.destination)

      // Create a pleasant notification sound (ding)
      oscillator.frequency.setValueAtTime(800, audioContext.currentTime)
      oscillator.frequency.setValueAtTime(1000, audioContext.currentTime + 0.1)
      oscillator.frequency.setValueAtTime(800, audioContext.currentTime + 0.2)

      gainNode.gain.setValueAtTime(0.3, audioContext.currentTime)
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3)

      oscillator.start(audioContext.currentTime)
      oscillator.stop(audioContext.currentTime + 0.3)
    } catch (error) {
      console.log('Audio notification not supported')
    }
  },

  // Play a "chime" sound for important visitors
  playChime: () => {
    try {
      const audioContext = new (window.AudioContext || window.webkitAudioContext)()
      const oscillator = audioContext.createOscillator()
      const gainNode = audioContext.createGain()

      oscillator.connect(gainNode)
      gainNode.connect(audioContext.destination)

      // Create a chime sound
      oscillator.frequency.setValueAtTime(523, audioContext.currentTime) // C
      oscillator.frequency.setValueAtTime(659, audioContext.currentTime + 0.1) // E
      oscillator.frequency.setValueAtTime(784, audioContext.currentTime + 0.2) // G

      gainNode.gain.setValueAtTime(0.2, audioContext.currentTime)
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.4)

      oscillator.start(audioContext.currentTime)
      oscillator.stop(audioContext.currentTime + 0.4)
    } catch (error) {
      console.log('Audio notification not supported')
    }
  },

  // Play a "bell" sound for conversions
  playBell: () => {
    try {
      const audioContext = new (window.AudioContext || window.webkitAudioContext)()
      const oscillator = audioContext.createOscillator()
      const gainNode = audioContext.createGain()

      oscillator.connect(gainNode)
      gainNode.connect(audioContext.destination)

      // Create a bell sound
      oscillator.frequency.setValueAtTime(1046, audioContext.currentTime) // High C
      oscillator.frequency.setValueAtTime(880, audioContext.currentTime + 0.1) // A
      oscillator.frequency.setValueAtTime(659, audioContext.currentTime + 0.2) // E

      gainNode.gain.setValueAtTime(0.25, audioContext.currentTime)
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5)

      oscillator.start(audioContext.currentTime)
      oscillator.stop(audioContext.currentTime + 0.5)
    } catch (error) {
      console.log('Audio notification not supported')
    }
  },

  // Test all sounds
  testAll: () => {
    setTimeout(() => notificationSounds.playDing(), 0)
    setTimeout(() => notificationSounds.playChime(), 600)
    setTimeout(() => notificationSounds.playBell(), 1200)
  }
}

// Notification preferences
export const notificationPreferences = {
  // Get user's notification preferences
  getPreferences: () => {
    if (typeof window !== 'undefined') {
      return {
        soundEnabled: localStorage.getItem('notificationSound') !== 'false',
        desktopEnabled: localStorage.getItem('notificationDesktop') !== 'false',
        soundType: localStorage.getItem('notificationSoundType') || 'ding'
      }
    }
    return {
      soundEnabled: true,
      desktopEnabled: true,
      soundType: 'ding'
    }
  },

  // Set user's notification preferences
  setPreferences: (preferences) => {
    if (typeof window !== 'undefined') {
      Object.entries(preferences).forEach(([key, value]) => {
        localStorage.setItem(`notification${key.charAt(0).toUpperCase() + key.slice(1)}`, value)
      })
    }
  }
}
