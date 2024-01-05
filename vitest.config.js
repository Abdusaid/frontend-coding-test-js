import Vue from '@vitejs/plugin-vue'

export default {
  plugins: [Vue()],

  test: {
    globals: true,
    environment: 'jsdom',
  },

  testMatch: ['**/*.test.js'],
}
