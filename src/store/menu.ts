import { ref } from 'vue' 

export const isOpen = ref<boolean>(false)

export const toggleMenu = (value: boolean): void => {
  if(value) {
    isOpen.value = value
  } else {
    isOpen.value = !isOpen.value
  }
}



