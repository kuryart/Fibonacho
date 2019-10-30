<?php

$_POST['position'] = ( isset($_POST['position']) ) ? $_POST['position'] : null;

if($_POST["position"]) 
{
    echo Fibonacho($_POST["position"]);
}

function Fibonacho($termo) 
{
    if ($termo == 1) 
    {
        return 0;
    } 
    elseif ($termo == 2)
    {
        return 1;
    }
    else 
    {
        if (is_numeric($termo)) 
        {
            return Fibonacho($termo - 1) + Fibonacho($termo - 2);
        }
        else 
        {
            return "InvalidInput";
        }
    }
}  

?>