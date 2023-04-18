<a class="sr-only sr-only-focusable visually-hidden" href="#main">
  {{ __('Skip to content') }}
</a>

@include('sections.header')

  <main id="main" class="main">
    <div class="container" id="container">
      <div class="row" id="wrapper">
        <div class="col-md-12" id="content">
          @yield('content')
        </div>
      </div>
    </div>
  </main>

  @hasSection('sidebar')
    <aside class="sidebar">
      @yield('sidebar')
    </aside>
  @endif
