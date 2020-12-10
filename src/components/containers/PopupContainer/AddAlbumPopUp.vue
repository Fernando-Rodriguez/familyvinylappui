<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">

          <div class="modal-body">
            <slot name="body">
              default body
            </slot>
          </div>

          <div class="modal-footer">
            <slot name="footer">
              default footer
              <router-link to="/owned-albums/all" >
                <button class="navbar-add-album" @click="$emit('close')">
                  OK
                </button>
              </router-link>
            </slot>
          </div>

        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
name: "AddAlbumPopUp"
}
</script>

<style scoped>

.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
  width: 300px;
  margin: 0px auto;
  background-color: black;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
}

.modal-footer{
  margin: 10px;
  color: white;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  height: 100%;
  width: 100%;
  margin: 0;
}

.navbar-add-album{
  color: white;
  background-color: transparent;
  border: 1px white solid;
  transition: 0.1s ease-in-out;
  margin: 0px 0px;
}

.navbar-add-album:hover{
  transform: scale(1.1);
}

.navbar-add-album:active{
  background-color: white;
  color: black;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

</style>