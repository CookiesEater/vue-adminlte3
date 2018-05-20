<template>
  <a-lte-navbar border-bottom>
    <b-navbar-nav>
      <b-nav-item>
        <font-awesome-icon icon="bars" />
      </b-nav-item>
      <b-nav-item to="/" class="d-none d-sm-inline-block">Home</b-nav-item>
      <b-nav-item to="" class="d-none d-sm-inline-block">Contact</b-nav-item>
    </b-navbar-nav>

    <b-nav-form class="ml-3">
      <b-input-group size="sm">
        <b-form-input class="form-control-navbar" placeholder="Search..." />
        <b-input-group-append>
          <b-button variant="navbar">
            <font-awesome-icon icon="search" />
          </b-button>
        </b-input-group-append>
      </b-input-group>
    </b-nav-form>

    <b-navbar-nav class="ml-auto">
      <b-nav-item-dropdown no-caret right>
        <template slot="button-content">
          <font-awesome-icon icon="comments" />
          <b-badge variant="danger" class="navbar-badge">3</b-badge>
        </template>
        <b-dropdown-item to="">1</b-dropdown-item>
        <b-dropdown-item to="">2</b-dropdown-item>
        <b-dropdown-item to="">3</b-dropdown-item>
        <b-dropdown-item to="">4</b-dropdown-item>
      </b-nav-item-dropdown>
      <b-nav-item-dropdown no-caret right>
        <template slot="button-content">
          <font-awesome-icon icon="bell" />
          <b-badge variant="warning" class="navbar-badge">15</b-badge>
        </template>
        <b-dropdown-item to="">1</b-dropdown-item>
        <b-dropdown-item to="">2</b-dropdown-item>
        <b-dropdown-item to="">3</b-dropdown-item>
        <b-dropdown-item to="">4</b-dropdown-item>
      </b-nav-item-dropdown>
      <b-nav-item to="">
        <font-awesome-icon icon="th-large" />
      </b-nav-item>
    </b-navbar-nav>
  </a-lte-navbar>
</template>
