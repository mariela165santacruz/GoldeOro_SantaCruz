import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* Column1 */}
          <div className="col">
            <h4>GOL DE ORO</h4>
            <ui className="list-unstyled">
              <li>+54 9 11 3986 6849</li><br />
              <li>info@wingsports.com</li><br />
              <li>Av. Cabildo 2872, Belgrano</li><br />
            </ui>
          </div>
          {/* Column2 */}
          <div className="col">
            <h4>SEGUINOS</h4>
            <ul>
                <li><a href="https://www.facebook.com/jumpman23" class="facebook"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAADcElEQVRYR61YS1ZTQRCtak+EmbgC2YEZ6gvnwA7U2QsOTEYSR+6AsAkeOgkTDUNcgRkEHCo7CDtgiueY9vTr7nRVf9JNNBMeoT+3btW9VQ8E9UEAkO0TfzZfPewHAoJcHef20ktSJ6q90U/JZhpAOqL8SXxFCCh/QiSEyKb2Kw40zhw/jgD6r3nj+Q/AFabMQnrZ//QaJTxn2wISVNHZeMzzA9hFhEVn+/G32WR451PB7q3qZoAoJsVVTnEZVaiSThQnY24J+ObH9P0lBRDs2ztsxlLicUBqe/EDKAgOCEsCUZ7Mv47GISCydj0gfktADv2zCSBgi2yygGiJkZg1qiSgSB0GgPgXNwDyl0BY/JG4A7DsAoguAjyxR2lAH8auPGxVGobUj14qZeXueINSfpxfjGbqeCr1qt/MEHCfA6IpixjjZimzOZe3na3t7ux8eBfiR+j1TxVID1CMIbK7PGU6dip8kHJ4fTE6T7WLFENrZa8BiWOa19Jsdba2nip27AUv6mZXgHhHUjQAgN3V70KezL9sqrKIjH0FXU2PmI306rNLQHjVdlrUIeoFGnJa9mRRecp895BgAVkZV7WqGbGfMkkGiAiLxW4B+dGUpE0DchWhakYVcREg6+FuO/ehjMdEjfzaS1nVP50hiJWq/GLPpEzHlvOhFqjtpRHr50h5q+n1mwVIfGaliaao16vsbTOWy0gvi+QsFqEr2XBD1T9rJ6RiY2wZagFlZF/MkLu8OvzcRbn8yaQQkz1tbGpxqLJ0h48zFF+/VzcHEvF7FhBRfPsYqqxEX3qN70MrZ47MTK0PJRkidzKnDgzNmFti7kgCiphqHJBtrsE8JI7zUx8HpzBeXxzharBHgKo2PpQIgDGUM8byROmVDhApZG/c8M/UgNbMQ66GNmuuYcqMMaYYSo6wqRpaS1OopvIa0oyKGKC87COoEgN/rJe5CdEEkJqpzTWs7zljLHPqVfGYU67aoi6roSRDfvxF48e/yD7CEDNL3xj1iyJO/Oj1ppB2MnUZY3T6zc1D0RdFvzQPBpOd+/vfB49QvbaEH78zkwzBfDoas5TVpwMh0I2s5P8PyyUs+PztQi6znHRLK9tv2SUGSIOxh5Cizty4jhoGib6L8TODG6jEU05dGO7my1IMGXBM9n61a0o3zFWcjmwgfwEArAVJRgSURwAAAABJRU5ErkJggg=="/></a></li>
                <li><a href="https://www.instagram.com/airjordanarg/" class="instagram"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAEr0lEQVRYR81Yz28bRRT+3tpcOEB64Nz0L6irZBOEIOtFRUjlgCNuiEP6F2BuVN4QU9v8ONURf0BzQJwQTcShgFT8AwlK1qjmzsG5capciUvleB6a3Y09szO763BiL/buvpn53nvf++bNEla9CAAXGBs2qwzS55Qj/lcX5fqgvoz+Gw8WzhivDTeTsfqP1So7QskqBF5kawkpyxXLcwuIvNErpazndiol5qsMqmQOsASQwOM50ZkfBuNcEiqg9bCnVhtututMOACwZtKviOXqCJoCoumF+4dANlFMUie2vUpzrfRC+QEDVXtE4kTmV4VpQ0B/Ppvv+uODqW1ek9QJoIHb6gPkpQfJmGR6YXlps5egdsLAtwKy0Xy40akL4nvawnYklxUmhR50e2fUOEprmzXiw632hBlXV2J7ISS6DRJTZtRTEZ94YXAtPdwAJKvJAT+JApIbFZ2Yhql84ODEOw1qctHhVqvGTA9UAAJ0ww8bY436y5t4gZ7bqjqgXjEgPAPoSLA49kf7/d6rn6+X+LzCwqkCvAfgZQBjLwxuRIDiar2nAWL25dgMQPHjwVarCXYOlpphKVEHJ+L5+Z4/blorRYKj+fyYgOsAJgRMFtWqhpL4U+90v6kBSkt+DIik7iyu5Rwk83jihUHtgozDrc47gsW2A2LB9Lg6Ch5eONN32+MEVDSXkVYVkCaMyk3fiJBGu2didr7u/9mcDiufvYKy+IaBm3rI6cdyefb+a781n0o+EvhJZrXaIqRySMpYf7vVhNAjpNgcVsNGXXo6cNs/AXjLLLJIDB9Ww+BWRAG30wX4w7wIpXccTcnzOCQSEg63O2+z4B/SBRHfx+rsgG7uhI1Hv7idPcF8f6GmRRxKe2jj0IWNmJ1fkUQeuO0AQKtAgu54YfDFhYxYbYtSJmmXD2h+Re5BA7fVAKidC4j4Y+90/8tLA0rnLya1nUOChe+PPukPtltvQtAjrfrM/tbzwmA4dDt7DL5/uQgpqAYWUisLH3phox7rVecYzO/ao0TfeaPGe7LD7LvtLiWkNmo/P2WJMEaAVGFMloxQ0VTMZtckj77faL74klP+GsCuWkFE9O0/T//+4NZfXz23pusypJaBisteB5QStMV2IO1/3mi/TiVsSWFk5t+9MPg1KTb0N3VhNKJZFKEIUA6HFOkei3Jp1398Z2JLWRIZyRut3V1dqZVZe5utqkPUMxYyd/4pA0eO7ABBZ9LeIb4OjkDU430iu6uUrxns+2HB5ppbprb9yMyDdqLM62Cs7Yet3dYbNN3LyzWOltmTCRzC2RunwXran4yO8W6N2dGaKdueVXy2zpZOYny0Mwq66RNI5sm177b6ZDT5iccFneTyNJLVVfLAC/etp5mMUwyhVzlYc8qlY5B68igAlBBZjZyJnQdiNq9FzZ0lo0XHKgzduzXA6cZNf0EfrWpoKltEOINAd+ePoJv3FSUfkCoHbqcCnq85Di1CrXqflUUCxnPhTPyR3syreM1+KJFW9aNCQWvxH15T3CnZylqZLfMQmrFpKhqT9st2zi9Y3bJIDGjlcSsbZizFi7WWMyWRS0bkf7DKSvTF4PQ3rCzVXsWPxOZfuX9JQzZdeeYAAAAASUVORK5CYII="/></a></li>
                <li><a href="https://twitter.com/Jumpman23" class="twitter"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAADgUlEQVRYR61XW1YaQRC9NeRfRhcQdhBdQcYVqAH8FVYgWUFwBdEd4GcEA1lBWIKsIGQBMPidZCqnm8d0Tz/hOB/qGburb9+6dauGCADLH8DmF8Sj/i1fHPio8dXAxvtNfPFe+ZMDxwZgWi6mxiewuHflwnrMNSDjnP35cd3YRbcvM0GO7PBUOva4gFcXJLl588cFLyYRb6QhV1WY+ohRaZCh6ISIhd/yUyTFLUANABkBL8w8xbvkAVfpfCfp8bKOP2jgOn3RhV8V9fe8AeYMzeNBEGlVfc95D8xf7fsIROhygTlQXBBRh2t0VoIsq0/fvw1K1EUz9YCq8DbKL0E83tW1BZW2g+gzmul9dZkmarlhuJyC8HGDt4uWYCqQ+XFexz/+BUK9utSebh6AMAfTGWrUwVW6Ut1Q96HRcgLgQvGPCWrUXW9yqEmwAx5XLS+Q8lcUlOkagkhr2TpkALsOViDqoZk+qgLcMTdc9EH0xQQgfIV3rUm55AwFdapgtnLW4wzzDMQ/rQcDK4AnKJIHLdhocQ/QrUq7luSqKzDfUfukbwrBZYyjxYBAN2bf2RxZZk6U7Db/mT9FSro1QevWbTr1c36JBFP85Ukp7ngDqLqIkqZSYgWdo51ObZqzAFpOwHQBsLh5PRZKtHmKgEzn1E6nrrTqZz4t+khsArXePRavHCl240fr2GxZis70oOO8IT1l9wTu7v23pccBP9A6vnTdxN5ct2VsjApvAU5xaMso4h4/nvMOmPsA3qu3CY8QXtCvqFFDdeZw69iuEH4EHIEkqNMosYSUzXyH9omI53ycDNEwz1ga5B4zjQWQ8mrNzqd0ZW2NmqhdgUaLAUA3YXaUCnKqVZ0e1PXmhf31pHd/83vJcD5rC7ZXloMIf0LF95pIH4oMRKJcP4QYq5wzQ40yn5CrRWM0KOuBaysQDTTavQHEg3Eao5qCJzEfC0ZkpYkZ2Xys3if7wyNqSa9kxmI6tnAavbLUuQ/CEQGntl5jT5cW5Tcxdfg6nVqnxwhvtbSOogdQR/pQ/Ff+DKABWum9y+DtWPTVbqcWMCVjRQbQetbZzdqYgbEC8RyUvCDBpPr1sL5lyCkVLkwf8rvaAbG9kFxQ/QyF6tvvYNG7HWVffV0OsMag7lrqLkIjfa6ai2LIq4Q9ZFLitcDx+5CLbXcPOlDDxjaFof1FfRA5AWX9B5X1fTmMvJNeAAAAAElFTkSuQmCC"/></a></li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} Copyright - Mariela Raquel Santa Cruz Alarcón
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;