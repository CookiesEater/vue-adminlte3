<template>
  <b-container fluid>
    <b-row class="justify-content-md-center mt-5 mb-5">
      <b-col md="auto" col>
        <h1 class="display-1 text-warning text-center">404</h1>
      </b-col>
      <b-col md="4" col>
        <h4>
          <font-awesome-icon icon="exclamation-triangle" class="text-warning" />
          Oops! Page not found.
        </h4>
        <p>We could not find the page you were looking for. Meanwhile, you may return to <router-link to="/">dashboard</router-link> or try using the search form.</p>
        <b-form>
          <b-form-group>
            <b-input-group>
              <b-form-input type="text" placeholder="Search..." />
              <b-input-group-append>
                <b-button variant="warning">
                  <font-awesome-icon icon="search" />
                </b-button>
              </b-input-group-append>
            </b-input-group>
          </b-form-group>
        </b-form>
      </b-col>
    </b-row>
  </b-container>
</template>
