<form action="/authorization" class="authorForm authorForm_flex " method="POST">
    <span class="authorForm__head">Авторизация</span>
    <div class="authorForm__wrapper">
        <div class="authorForm__content">
            <span class="authorForm__span">Логин: </span>
            <input name="login" class="authorForm__input" type="text">
        </div>
        <div class="authorForm__content">
            <div class="authorForm__content__pswd">
                <span class="authorForm__span">Пароль: </span>
                <input name="password" id="inputPswd" class="authorForm__input inputPswd" type="password">
            </div>
        </div>
        <?php
            // выводи ошибки если была
        if (isset($data['error'])) :
            ?>
        <div style="text-align: center;">
            <span style="color: red; font-size:20px"><?=$data['error']?></span>
        </div>
            <?php
        endif;
        ?>
        <div><a href="/registration">Зарегистрироваться</a></div>
        <input type="submit" class="authorForm__submit authorForm__submit_txt" value="Войти">
        <input name="action" class="d-none" value="authorization" type="text">
    </div>
</form>