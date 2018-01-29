require 'html-proofer'

task :test do
  options = {
    :internal_domains => ['itsolver.net'],
    :cache => {
      :timeframe => '30d',
      :storage_dir => '.tmp/html-proofer'
    },
    :url_ignore => [/(twitter).com|(privacyinternational).org/],
    # disable SSL certificates
    :typhoeus => {
      :ssl_verifypeer => false,
      :ssl_verifyhost => 0
    },
    :allow_hash_href => true,
    :assume_extension => true,
    :check_favicon => true,
    :check_img_http => true,
    :check_opengraph => true,
    :check_html => true,
    :empty_alt_ignore => false,
    :enforce_https => true,
    :report_invalid_tags => true
  }
  HTMLProofer.check_directory('./dist', options).run
end
