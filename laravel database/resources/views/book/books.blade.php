<form method="post" action="{{route('book.store')}}">
    @csrf
    Title
    <input type="text" name="title"/><br/>
    body:
     <input type="text" name="body"/><br/>
     <button type="submit">add</button>
</form>
